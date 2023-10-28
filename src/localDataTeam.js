import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalDataTeam() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), '/public/dataTeam.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData
}
