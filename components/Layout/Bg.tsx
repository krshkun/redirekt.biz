export default function Bg() {
  return (
    <div className="fixed z-[-1] overflow-hidden inset-0 w-screen h-screen">
      <svg
        className="w-full h-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            stroke-width={0}></path>
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="fixed top-0 left-0 -z-10 max-w-full overflow-hidden blur-3xl"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fill-opacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        ></path>
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4F46E5"></stop>
            <stop offset={1} stop-color="#80CAFF"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}