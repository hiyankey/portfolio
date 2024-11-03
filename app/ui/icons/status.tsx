export const StatusIcon = ({ classNames }: { classNames?: string }) => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`${classNames}`}
  >
    <g filter='url(#filter0_dd_1199_1239)'>
      <circle cx='6' cy='5' r='4' fill='url(#paint0_radial_1199_1239)' />
    </g>
    <defs>
      <filter
        id='filter0_dd_1199_1239'
        x='0'
        y='0'
        width='12'
        height='12'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='1' />
        <feGaussianBlur stdDeviation='1' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1199_1239'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius='0.3'
          operator='dilate'
          in='SourceAlpha'
          result='effect2_dropShadow_1199_1239'
        />
        <feOffset />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.964706 0 0 0 0 0.329412 0 0 0 0 0 0 0 0 0.1 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_dropShadow_1199_1239'
          result='effect2_dropShadow_1199_1239'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect2_dropShadow_1199_1239'
          result='shape'
        />
      </filter>
      <radialGradient
        id='paint0_radial_1199_1239'
        cx='0'
        cy='0'
        r='1'
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(6 5) rotate(90) scale(7.6)'
      >
        <stop stopColor='#F65400' />
        <stop offset='0.146087' stopColor='#F65603' />
        <stop offset='0.26237' stopColor='#F65B0B' />
        <stop offset='0.353109' stopColor='#F76317' />
        <stop offset='0.422564' stopColor='#F76E26' />
        <stop offset='0.474993' stopColor='#F87A38' />
        <stop offset='0.514657' stopColor='#F9874D' />
        <stop offset='0.545815' stopColor='#F99663' />
        <stop offset='0.572726' stopColor='#FAA67A' />
        <stop offset='0.59965' stopColor='#FBB591' />
        <stop offset='0.630846' stopColor='#FCC5A8' />
        <stop offset='0.670575' stopColor='#FDD3BE' />
        <stop offset='0.723095' stopColor='#FDE1D2' />
        <stop offset='0.792666' stopColor='#FEEDE4' />
        <stop offset='0.883548' stopColor='#FFF7F3' />
        <stop offset='1' stopColor='white' />
      </radialGradient>
    </defs>
  </svg>
)
