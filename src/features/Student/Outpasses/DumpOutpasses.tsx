import React, { useState, useEffect } from "react";
import { supabase } from "../../../config/config";
import GenerateQR from "./GenerateQR";

function DumpOutpasses() {
  const [outpasses, setOutpasses] = useState([] as any[]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchOutpasses = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("outpass")
        .select("*")
        .eq("student_id", "80b817b8-4ef7-4607-bcff-0cd46274fe72"); // TODO: replace with uid
      if (error) throw "Error";
      setOutpasses(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOutpasses();
  }, []);

  return (
    <div>
      <div>DumpOutpasses</div>
      {isError ? (
        <div>Error fetching outpasses</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        outpasses.map(outpass => (
          <div>
            <pre>{JSON.stringify(outpass, null, 2)}</pre>
            <GenerateQR id={outpass.id} disabled={!outpass.signed_by} />
          </div>
        ))
      )}
    </div>
  );
}

export default DumpOutpasses;
