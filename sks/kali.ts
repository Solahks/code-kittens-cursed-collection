import { createInterface } from "readline";
import { exec } from "child_process";

const ask = (query: string): Promise<string> => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (answer) => {
      rl.close();
    
      resolve(answer);
    })
  );
};

const execPromise = (
  command: string
): Promise<{ stdout: string; stderr: string }> => {
  
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ error: error.message, stdout, stderr });
        return;
      }
      
      if (stderr) {
        reject({ error: stderr, stdout, stderr });
        
        return;
      }
      
      resolve({ stdout, stderr });
    });
  });
};

const kali = async () => {
  try {
    const GIT_EMPTY_COMMIT = `git commit --allow-empty -m 'kali--${new Date()}.'`;
    const date = await ask(
      "Desired contribution date (yyyy-mm-dd or 'range'): "
    );
    let numContributionsType = "";

    let range1Split: string[] = [];
    let rangeStart: string = "";
    let range = 1;

    if (date === "range") {
      console.log("Note: Dates cannot span across multiple months.");

      rangeStart = await ask("Date range start (yyyy-mm-dd): ");
      const rangeEnd = await ask("Date range end (yyyy-mm-dd): ");

      range1Split = rangeStart.split("-");

      const range1Day = parseInt(rangeStart.split("-")[2]);
      const range2Day = parseInt(rangeEnd.split("-")[2]);

      range = range2Day - range1Day;

      console.log("range1Day: ", range1Day);
      console.log("range2Day: ", range2Day);
      console.log("range: ", range);
    }

    let numContributions = await ask(
      "Number of contributions (number or 'rand'): "
    );

    if (numContributions === "rand") {
      numContributionsType = "rand";
      numContributions = Math.ceil(Math.random() * 10).toString();
    }

    if (date === "range") {
      for (let i = 0; i < range; i++) {
        if (numContributionsType === "rand") {
          numContributions = Math.ceil(Math.random() * 10).toString();
        }

        for (let j = 0; j <= parseInt(numContributions); j++) {
          await execPromise(GIT_EMPTY_COMMIT);

          await execPromise(
            `GIT_COMMITTER_DATE="${range1Split[0]}-${range1Split[1]}-${parseInt(
              range1Split[2]
            )}T12:00:00" git commit --amend --allow-empty --no-edit --date="${
              range1Split[0]
            }-${range1Split[1]}-${parseInt(range1Split[2])}T12:00:00"`
          );
        }

        range1Split[2] = (parseInt(range1Split[2]) + 1).toString();
      }
    } else {
      for (let i = 0; i < parseInt(numContributions); i++) {
        await execPromise(GIT_EMPTY_COMMIT);

        await execPromise(
          `GIT_COMMITTER_DATE="${date}T12:00:00" git commit --amend --allow-empty --no-edit --date="${date}T12:00:00"`
        );
      }
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};

kali();