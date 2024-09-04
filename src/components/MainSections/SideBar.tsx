import { JSX, SVGProps } from "react";

const SoundIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      fill="#8E3EBB"
      d="M.5 22C.5 10.126 10.126.5 22 .5S43.5 10.126 43.5 22 33.874 43.5 22 43.5.5 33.874.5 22Z"
    />
    <path
      stroke="#2C2C2C"
      strokeLinecap="round"
      d="M.5 22C.5 10.126 10.126.5 22 .5S43.5 10.126 43.5 22 33.874 43.5 22 43.5.5 33.874.5 22Z"
    />
    <g clipPath="url(#a)">
      <path
        stroke="#F5F5F5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m31.167 19.5-5 5m0-5 5 5m-10-8.333L17 19.5h-3.333v5H17l4.167 3.333V16.167Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M12 12h20v20H12z" />
      </clipPath>
    </defs>
  </svg>
)
const SettingsIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      fill="#8E3EBB"
      d="M.5 22C.5 10.126 10.126.5 22 .5S43.5 10.126 43.5 22 33.874 43.5 22 43.5.5 33.874.5 22Z"
    />
    <path
      stroke="#2C2C2C"
      strokeLinecap="round"
      d="M.5 22C.5 10.126 10.126.5 22 .5S43.5 10.126 43.5 22 33.874 43.5 22 43.5.5 33.874.5 22Z"
    />
    <path
      stroke="#F5F5F5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24.25 17.25a.833.833 0 0 0 0 1.167l1.333 1.333a.833.833 0 0 0 1.167 0l3.142-3.142a5 5 0 0 1-6.617 6.617l-5.758 5.758a1.768 1.768 0 1 1-2.5-2.5l5.758-5.758a5 5 0 0 1 6.617-6.617L24.25 17.25Z"
    />
  </svg>
)
const DarkModeIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5Z" fill="#8E3EBB"/>
<path d="M22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5C33.8741 0.5 43.5 10.1259 43.5 22C43.5 33.8741 33.8741 43.5 22 43.5Z" stroke="#2C2C2C" strokeLinecap="round"/>
<path d="M28.75 22.5925C28.632 23.8692 28.1529 25.0858 27.3687 26.1001C26.5845 27.1144 25.5276 27.8843 24.3218 28.3199C23.1159 28.7555 21.811 28.8386 20.5596 28.5596C19.3083 28.2805 18.1622 27.6509 17.2557 26.7443C16.3491 25.8378 15.7194 24.6917 15.4404 23.4404C15.1614 22.189 15.2445 20.8841 15.6801 19.6782C16.1156 18.4724 16.8856 17.4155 17.8999 16.6313C18.9142 15.8471 20.1308 15.368 21.4075 15.25C20.66 16.2612 20.3004 17.5071 20.3939 18.7611C20.4874 20.015 21.0279 21.1938 21.917 22.0829C22.8062 22.9721 23.985 23.5126 25.2389 23.6061C26.4929 23.6996 27.7388 23.3399 28.75 22.5925Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
export default function SideBar() {
  return(
<section className="flex flex-col items-start justify-end gap-4 w-1/6">

<DarkModeIcon />
<SoundIcon />
<SettingsIcon />

</section>
  );
}
