import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLanguage } from "../context/language-context";

const ServiceStatus: React.FC = () => {
  const [status, setStatus] = useState<"operational" | "unknown">("unknown");
  const { language } = useLanguage();

  const apiServiceStatusURL =
    import.meta.env.VITE_API_SERVICESTATUS_URL || "";

  const statusColor = () => {
    if (status === "operational") return "!text-green-500";
    return "!text-gray-400";
  };

  const iconColor = () => {
    if (status === "operational") return "bg-green-500";
    return "bg-gray-400";
  };

  useEffect(() => {
    async function getStatusData() {
      try {
        const response = await axios.get(apiServiceStatusURL);
        setStatus(
          response.data.status === "operational" ? "operational" : "unknown"
        );
      } catch (error) {
        console.error("Failed to get status from backend:", error);
        setStatus("unknown");
      }
    }

    getStatusData();
  }, [apiServiceStatusURL]);

  const label =
    language === "FR"
      ? status === "operational"
        ? "Envoi des messages : en ligne"
        : "Envoi des messages : indisponible"
      : language === "ES"
      ? status === "operational"
        ? "Envío de mensajes: en línea"
        : "Envío de mensajes: no disponible"
      : status === "operational"
      ? "Message sending: online"
      : "Message sending: unavailable";

  return (
    <React.Fragment>
      <div className="status p-4 rounded-xl flex flex-row items-center">
        <div className="status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4">
          <div
            className={`status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${iconColor()} rounded-[inherit]`}
          />
          <div
            className={`status-icon-wave w-[inherit] h-[inherit] rounded-[inherit] ${iconColor()} animate-ping`}
          />
        </div>
        <p className={`status-text ${statusColor()}`}>{label}</p>
      </div>
    </React.Fragment>
  );
};

export default ServiceStatus;
