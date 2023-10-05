import { useTranslation } from "react-i18next";

function ErrorFallback({ error, resetErrorBoundary }) {
  const { t } = useTranslation();

  return (
    <div role="alert" style={{ margin: "1rem", color: "red" }}>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        style={{
          width: "20%",
          margin: "0",
          padding: "10px",
          color: "white",
          backgroundColor: "blue",
          borderRadius: "5px",
        }}
      >
        {t("Reload")}
      </button>
    </div>
  );
}

export default ErrorFallback;
