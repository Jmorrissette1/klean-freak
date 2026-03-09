import Image from "next/image";

interface ExpectStep {
  img: string;
  title: string;
  points: string[];
  highlight?: string;
}

interface WhatToExpectProps {
  steps: ExpectStep[];
}

export default function WhatToExpect({ steps }: WhatToExpectProps) {
  return (
    <section className="expectSection">
      <h2 className="expectTitle">WHAT TO EXPECT AT THE CAR WASH</h2>

      <div className="expectGrid">
        {steps.map((step, i) => (
          <div className="expectCard" key={i}>
            <Image src={step.img} alt={step.title} width={500} height={300} className="expectImg" />
            <h3 className="expectCardTitle">{step.title}</h3>
            {step.points.map((point, j) => (
              <p key={j}>{point}</p>
            ))}
            {step.highlight && <p className="expectHighlight">{step.highlight}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}