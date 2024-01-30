import React, { useMemo, useState } from "react";
import { Button, ConfigProvider, Segmented, Tooltip } from "antd";
const text = <span>prompt text</span>;
const buttonWidth = 80;
const TopTooltip = () => {
  const [arrow, setArrow] = useState("Show");
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <ConfigProvider
      button={{
        style: {
          width: buttonWidth,
          margin: 4,
        },
      }}
    >
      <Segmented
        value={arrow}
        onChange={(val) => setArrow(val)}
        style={{
          marginBottom: 24,
        }}
      />
      <div className="demo">
        <div
          style={{
            marginInlineStart: buttonWidth,
            whiteSpace: "nowrap",
          }}
        >
          <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
            <Button>TR</Button>
          </Tooltip>
        </div>
      </div>
    </ConfigProvider>
  );
};
export default TopTooltip;
