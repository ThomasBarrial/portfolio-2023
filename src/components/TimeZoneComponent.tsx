"use client";

import React, { useState, useEffect } from "react";

const TimeZoneComponent: React.FC = () => {
  const [parisTimezone, setParisTimezone] = useState<string>("");

  useEffect(() => {
    // Obtenir le nom du fuseau horaire de Paris
    const getPauTimezone = (): string => {
      const options: Intl.DateTimeFormatOptions = { timeZone: "Europe/Paris" };
      const dateFormat: Intl.DateTimeFormat = new Intl.DateTimeFormat(
        [],
        options
      );
      const { timeZone }: Intl.ResolvedDateTimeFormatOptions =
        dateFormat.resolvedOptions();
      return timeZone;
    };

    const getParisTime = () => {
      const parisDate = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Paris",
      });
      return parisDate;
    };

    // Mettre à jour l'état avec le fuseau horaire de Paris
    setParisTimezone(getParisTime());
  }, []);

  return (
    <div>
      <h2 className="bold mt-10 text-xl leading-3 opacity-50">
        Time zone, Paris
      </h2>
      <p className="mt-5">{parisTimezone}</p>
    </div>
  );
};

export default TimeZoneComponent;
