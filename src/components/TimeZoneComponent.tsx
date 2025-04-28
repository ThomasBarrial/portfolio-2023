"use client";

import React, { useState, useEffect } from "react";
import AnimUp from "./animated/AnimUp";

const TimeZoneComponent: React.FC<{ inView: boolean }> = ({ inView }) => {
  const [parisTimezone, setParisTimezone] = useState<string>("");
  const [montrealTimezone, setMontrealTimezone] = useState<string>("");

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

    const getMontrealTime = () => {
      const montrealDate = new Date().toLocaleString("en-US", {
        timeZone: "America/Toronto",
      });
      return montrealDate;
    };

    setMontrealTimezone(getMontrealTime());
  }, []);

  return (
    <div>
      <AnimUp duration={2} inView={inView} className="mt-10">
        <h2 className="opacity-50">Time zone, Montréal, Canada</h2>
      </AnimUp>
      <AnimUp duration={2.5} inView={inView} className="mt-2">
        <p>{montrealTimezone}</p>
      </AnimUp>
    </div>
  );
};

export default TimeZoneComponent;
