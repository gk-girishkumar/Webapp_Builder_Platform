import React from "react";

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-[30%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl" />
    </div>
  );
}

export default BackgroundEffects;
