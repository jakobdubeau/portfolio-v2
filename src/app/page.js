"use client"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col pt-6 mx-10">
      <ul className="grid gap-2 text-base">
        <li className="flex items-baseline gap-3 pl-6 group">
          <span className="text-white font-bold group-hover:translate-x-2 transition-transform duration-200 ease-out">
            &gt;
          </span>
          <span className="text-stone-400 group-hover:translate-x-2 transition-transform duration-200 ease-out">
            CS @
          </span>
          <span className="text-stone-300 font-medium group-hover:translate-x-2 transition-transform duration-200 ease-out">
            University of Ottawa
          </span>
        </li>
        <li className="flex items-baseline gap-3 pl-6 group">
          <span className="text-white font-bold group-hover:translate-x-2 transition-transform duration-200 ease-out">
            &gt;
          </span>
          <span className="text-stone-400 group-hover:translate-x-2 transition-transform duration-200 ease-out">
            seeking
          </span>
          <span className="text-stone-400 group-hover:translate-x-2 transition-transform duration-200 ease-out">
            S26/F26
          </span>
          <span className="text-stone-400 group-hover:translate-x-2 transition-transform duration-200 ease-out">
            internships
          </span>
        </li>
        <li className="flex flex-col gap-2 pl-6 group">
          <div className="flex items-baseline gap-3 group-hover:translate-x-2 transition-transform duration-200 ease-out">
            <span className="text-white font-bold">
              &gt;
            </span>
            <span className="text-stone-400">
              current
            </span>
            <span className="text-stone-300 font-medium">
              interests:
            </span>
          </div>
          <ul className="grid gap-1 pl-6 group-hover:translate-x-2 transition-transform duration-200 ease-out">
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
        <li className="flex items-baseline gap-3 pl-6 group">
          <span className="text-white font-bold group-hover:translate-x-2 transition-transform duration-200 ease-out">
            &gt;
          </span>
          <span className="text-stone-400 group-hover:translate-x-2 transition-transform duration-200 ease-out">
            building
          </span>
          <span className="text-stone-400 font-medium underline underline-offset-2 group-hover:translate-x-2 ease-out hover:text-neutral-200 transition-all duration-200">
            <Link
              href="https://github.com/jakobdubeau/kora"
              target="_blank"
							rel="noopener noreferrer"
            >
              kora
            </Link>
          </span>
        </li>
      </ul>
    </div>
  )
}
