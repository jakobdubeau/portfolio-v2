"use client"
import UOttawaLogo from "../../public/icon/UOttawa.png"

export default function Home() {
  return (
    <div className="flex flex-col">
      <ul className="grid gap-2 text-base">
        <li className="flex items-baseline gap-3 pl-6">
          <span className="text-white font-bold">
            &gt;
          </span>
          <span className="text-stone-400">
            CS @
          </span>
          <span className="text-stone-200">
            University of Ottawa
          </span>
        </li>
        <li className="flex flex-col gap-2 pl-6">
          <div className="flex items-baseline gap-3">
            <span className="text-white font-bold">
              &gt;
            </span>
            <span className="text-stone-400">
              current interests:
            </span>
          </div>
          <ul className="grid gap-1 pl-6">
            <li className="relative flex items-start gap-4">
              <span className="text-stone-300 font-normal">
                *
              </span>
              <span className="text-stone-400">
                machine learning
              </span>
            </li>
            <li className="relative flex items-start gap-4">
              <span className="text-stone-300 font-normal">
                *
              </span>
              <span className="text-stone-400">
                building things i&apos;d actually use
              </span>
            </li>
            <li className="relative flex items-start gap-4">
              <span className="text-stone-300 font-normal">
                *
              </span>
              <span className="text-stone-400">
                creativity through technology
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
