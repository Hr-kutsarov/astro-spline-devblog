import { Card, DonutChart, Title, Legend } from '@tremor/react';
import { cn } from '@/lib/utils';
import {motion, AnimatePresence} from 'framer-motion';
import { FaGenderless } from "react-icons/fa";

const development = [
  {
    name: 'Front-end',
    value: 76,
  },
  {
    name: 'Back-end',
    value: 24,
  },
  {
    name: 'Other',
    value: 10,
  },
];

const languageUsage = [
    {
      name: 'TypeScript',
      value: 86,
    },
    {
      name: 'Python',
      value: 14,
    },
    {
      name: 'Java/Rust',
      value: 10,
    },
  ];

export default function DonutChartUsageExampleWithClickEvent() {

  const xChartColors = [
    "slate-600",
    "slate-500",
    "slate-400",
    "slate-200"
  ];

  interface xInterfaceProps {
    payload: any;
    active: boolean | undefined;
    label: any;
  }

  const xTooltip = (props: xInterfaceProps) => {
    const { payload, active } = props;
    console.log(`${payload?.name}, - ${active}`)
    if (!active || !payload) return null;
    const categoryPayload = payload?.[0];
    if (!categoryPayload) return null;

    const xDataFormatter = () => {
      return <>{`1001 %`}</>;
    };

    return (
      <span className={cn()}>
        <p className="whitespace-nowrap text-right text-zinc-600 bg-zinc-50 px-4 py-3 rounded-md">
          {categoryPayload.name}
        </p>
        {/* <p className="whitespace-nowrap text-right font-medium text-slate-400">
          {categoryPayload?.value}
        </p> */}
      </span>
    );
  };

  const devExpNamesList = development.map((el) => el.name);
  const langUsageNamesList = languageUsage.map((el) => el.name);

  return (
    <motion.span 
    initial={{y:140, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 1.7, delay: 0.4}}
    className='grid grid-cols-2 gap-2 md:gap-12 lg:gap-24 '>
    <Card className={cn('border-none outline-none ring-0')}>
        <DonutChart
          className={cn(
            "h-[120px] md:h-[150px] w-[120px] md:w-[150px] text-zinc-50 font-semibold "
          )}
        //   valueFormatter={xDataFormatter}
          data={development}
          index="name"
          category="value"
          label="development"
          variant="donut"
          customTooltip={xTooltip}
          colors={xChartColors}
        />
      </Card>
    

      <Card className={cn('ring-0')}>
        <DonutChart
          className={cn(
            "h-[120px] md:h-[150px] w-[120px] md:w-[150px] text-zinc-50 font-semibold"
          )}
        //   valueFormatter={xDataFormatter}
          data={languageUsage}
          index="name"
          category="value"
          label="languages"
          variant="donut"
          customTooltip={xTooltip}
          colors={xChartColors}
        />
      </Card>

      <span id='legend-devexp' className={cn('flex flex-col gap-2 ml-8')}>
        {/* <h1 className={cn('text-lg')}>Dev Experience</h1> */}
        {devExpNamesList.map((el,idx) => 
            <p 
            className={cn('flex gap-1')}
            key={`${idx}-devxp`}
            >
                <FaGenderless className={cn(`text-${xChartColors[idx]}`)} size={24} />
                {el}
            </p>
        )}
    </span>

    <span id='legend-devexp' className={cn('flex flex-col gap-2 ml-8')}>
        {/* <h1 className={cn('text-lg')}>Dev Experience</h1> */}
        {langUsageNamesList.map((el,idx) => 
            <p 
            className={cn('flex gap-1')}
            key={`${idx}-devxp`}
            >
                <FaGenderless className={cn(`text-${xChartColors[idx]}`)} size={24} />
                {el}
            </p>
        )}
    </span>
      {/* <Card className={cn()}>
        <DonutChart
          className={cn(
            "h-[120px] md:h-[150px] w-[120px] md:w-[150px] text-zinc-50 font-semibold"
          )}
        //   valueFormatter={xDataFormatter}
          data={sales}
          index="name"
          category="sales"
          label="Sales"
          variant="donut"
          customTooltip={xTooltip}
          colors={xChartColors}
        />
      </Card> */}
    </motion.span>
  );
}