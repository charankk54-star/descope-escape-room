import { Descope, useSession } from "@descope/react-sdk";
import { useEffect, useState } from "react";

function App() {
  const { isAuthenticated, isSessionLoading } = useSession();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) return;

    fetch("https://descope-escape-room.com/api/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((resJson) => {
        console.log(resJson);
        setData(resJson);
      })
      .catch(console.error);
  }, [isAuthenticated]);

  return (
    <div>
      {!isAuthenticated && (
        <Descope
          flowId="sign-up-or-in"
          theme="light"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={(err) => console.log(err)}
        />
      )}

      {isSessionLoading && <p>Loading...</p>}

      {!isSessionLoading && isAuthenticated && (
        <div>
          <div id="login"></div>
          <code>{data?.body}</code>
        </div>
      )}
    </div>
  );
}

export default App;
