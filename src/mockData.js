export const mockOperations = Array.from({ length: 200 }, (_, index) => {
  const id = index + 1;
  const airports = ["TAS", "CAN", "DXB", "IST", "LHR", "JFK", "SFO", "NRT"];
  const trolleyTypes = ["Standard", "Heavy", "Light", "Special"];
  const operationType = ["Add", "Discharge"];
  const owners = ["Centrum", "Non-centrum"];
  const legs = [
    "TAS-CAN",
    "CAN-DXB",
    "DXB-TAS",
    "TAS-IST",
    "IST-DXB",
    "LHR-JFK",
    "JFK-SFO",
    "SFO-NRT",
    "NRT-LHR",
  ];
  const aircraftNumbers = ["A320", "B737", "A350", "B787", "E175", "CRJ900"];
  const flightPrefixes = ["TK", "EK", "AA", "UA", "LH", "JL"];

  const localOffset = Math.floor(Math.random() * 12) - 6;
  const randomDate = new Date(
    Date.UTC(
      2025,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28),
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60)
    )
  );
  const utcTimestamp = randomDate
    .toISOString()
    .replace("T", " ")
    .replace("Z", " ")
    .replace(".000", " ");
  const localTimestamp = new Date(
    randomDate.getTime() + localOffset * 60 * 60 * 1000
  )
    .toISOString()
    .replace("T", " ")
    .replace(
      "Z",
      ` ${localOffset >= 0 ? "+" : "-"}${Math.abs(localOffset)
        .toString()
        .padStart(2, "0")}:00`
    )
    .replace(".000", " ");

  return {
    operationId: `OP${id.toString().padStart(3, "0")}`,
    operationType:
      operationType[Math.floor(Math.random() * operationType.length)],
    aircraftNumber:
      aircraftNumbers[Math.floor(Math.random() * aircraftNumbers.length)],
    flightId: `${
      flightPrefixes[Math.floor(Math.random() * flightPrefixes.length)]
    }${Math.floor(Math.random() * 9000) + 1000}`,
    trolleyType: trolleyTypes[Math.floor(Math.random() * trolleyTypes.length)],

    trolleyId: `TRL-${id.toString().padStart(3, "0")}`,
    leg: legs[Math.floor(Math.random() * legs.length)],
    airport: airports[Math.floor(Math.random() * airports.length)],
    operationTimestampUtc: utcTimestamp,
    operationTimestampLocal: localTimestamp,
    owner: owners[Math.floor(Math.random() * owners.length)],
    comment: [
      "On time delivery",
      "Delayed due to weather",
      "No issues",
      "Maintenance required",
      "Smooth operation",
      "Awaiting inspection",
    ][Math.floor(Math.random() * 6)],
    userId: `USR${id.toString().padStart(3, "0")}`,
  };
});
