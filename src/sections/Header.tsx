'use client';

export const Header = () => {
  return (
    <header className="w-full flex justify-center bg-black">
      <div className="w-full bg-[#f7a7a7] border-2 border-[#d66] rounded-t-xl px-4 py-2 flex items-center justify-between shadow-[0_4px_0_#d66]">
        <div className="flex items-center gap-1 text-[#d14c4c] text-sm">
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <p className="font-bold text-[#7a1f1f] text-sm sm:text-base">
            Majhya Pihu Saathi!!
          </p>
        </div>
        <div className="text-[#7a1f1f] font-bold cursor-default">×</div>
      </div>
    </header>
  );
};
