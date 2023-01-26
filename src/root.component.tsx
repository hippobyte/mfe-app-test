import React from "react";
import { Box } from "@hippobyte/stylekit";
import { appConcern } from "@hippobyte/mfe-sdk";

function ClickMe(props) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={props.onClick}>
      click me
    </button>
  )
}

export default function Root(props) {
  const [trees, setTrees] = React.useState([]);
  const treeOptions = ["🌵","🌲","🌳","🌴"];
  const { addUnicorn } = appConcern;

  function randomTree(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function handleTree() {
    addUnicorn("🦄");
    setTrees([...trees, randomTree(treeOptions)]);
  }

  return (
    <main style={props.style}>
      <h1>I am the <strong>Green React</strong> micro front-end (MFE) application.</h1>
      <hr className="py-2" />
      <p>I do a little more than my <strong>Smiley</strong> cousin, if you <ClickMe onClick={() => handleTree()} /> I plant trees and give Smiley a 🦄.</p>
      <p>
        The take away is that you can share state between MFEs by leveraging a shared concern, in this instance <code>rxjs</code> and <code>BehaviorSubject</code>.
        The concern is shared between the two MFEs and the <code>addUnicorn</code> function is called from the <strong>mfe-sdk</strong> utility MFE.
      </p>
      <Box>
        {
          trees.map((tree, index) => {
            return (
              <span key={index}>{tree}</span>
            )
          })
        }
      </Box>
    </main>
  );
}

Root.defaultProps = {
  style: {
    padding: "1.2rem",
    backgroundColor: "rgb(223, 235, 201)",
    borderTop: "2px solid rgb(223, 235, 201)"
  },
}
