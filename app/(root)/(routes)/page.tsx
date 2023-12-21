"use client";


import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";
import { useParams } from "next/navigation";




const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }

  }, [isOpen, onOpen]);


  return null;
}


export default SetupPage;