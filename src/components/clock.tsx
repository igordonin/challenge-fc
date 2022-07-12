import * as React from 'react';

export const Clock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const fiveSeconds = 5 * 1000;
    const ticker = setInterval(() => setTime(new Date()), fiveSeconds);

    return () => {
      clearInterval(ticker);
    };
  });

  return (
    <div>
      {time.toLocaleTimeString('en-US', {
        timeStyle: 'short',
        hour12: true,
      })}
    </div>
  );
};
