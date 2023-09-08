import React from "react";
import { useQuery } from "@apollo/client";

import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

import { QUERY_THOUGHTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const notes = data?.notes || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <NoteList />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <NoteForm notes={notes} title="Some Feed for Thought(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
