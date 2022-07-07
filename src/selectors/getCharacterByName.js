import { bb_and_bcs } from "../data/bb_and_bcs";

export const getCharacterByName = (name='') => {
    if(name===''){
      return[];
    }else{
      name=name.toLowerCase();
      return bb_and_bcs.filter(bb_and_bcs=>bb_and_bcs.name.toLowerCase().includes(name ));
    }
  }
  