"use client";

import React, { useState } from "react";
import DesignerSidebar from "./DesignerSidebar";
import {  useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

function Designer() {
    const droppable = useDroppable({
        id: "designer-drop-area",
        data: {
          isDesignerDropArea: true,
        },
      });
    return (
        <div className="flex w-full h-full">
      <div
        className="p-4 w-full"
       
      >
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto",
            droppable.isOver && "ring-4 ring-primary ring-inset",
          )}
        >
       
         
         
        </div>
      </div>
      <DesignerSidebar />
    </div>
    )
}

export default Designer;