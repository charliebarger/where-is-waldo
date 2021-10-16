import { collection, getDocs } from "firebase/firestore";
import db from "../../componenets/firebase.config";

const getParasites = async () => {
  //get parasite info
  const querySnapshot = await getDocs(collection(db, "parasites"));
  //set character data to an array with parasite info
  return querySnapshot.docs.map((doc) => {
    let data = doc.data();
    //add images
    data.fullBody = require(`../images/parasites/${data.fullBody}.png`).default;
    data.closeUp = require(`../images/parasites/${data.closeUp}.png`).default;
    return data;
  });
};

export default getParasites;
