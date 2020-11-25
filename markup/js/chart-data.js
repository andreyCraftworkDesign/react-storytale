let linesConfig = {
  type: "area",
  plotarea: {
    marginTop: "13%",
    marginRight: "dynamic",
    marginBottom: "dynamic",
    marginLeft: "dynamic",
    adjustLayout: true,
  },
  scaleX: {
    values: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    item: {
      color: "#000000",
      fontSize: 13,
    },
    tick: {
      visible: false,
    },
    lineColor: "#ebebeb",
    itemsOverlap: true,
    maxItems: 12,
    tick: {
      visible: false,
    },
  },
  scaleY: {
    values: "0:1000:250",
    visible: true,
    lineWidth: 0,
    itemsOverlap: true,
    maxItems: 5,

    tick: {
      visible: false,
    },
    guide: {
      lineStyle: "dashed",
    },
    item: {
      paddingBottom: "20%",
      color: "#000000",
      fontSize: 13,
    },
  },

  series: [
    {
      values: [500, 100, 200, 300, 400, 500, 80, 600, 180, 350, 250, 400],
      lineColor: "#624CE0",
      backgroundColor: "transparent",
    },

    {
      values: [200, 60, 200, 80, 700, 400, 200, 150, 80, 450, 250, 900],
      lineColor: "#FFA800",
      backgroundColor: "transparent",
      hoverState: {
        visible: true,
        shadow: true,
        backgroundColor: "rgba(255, 168, 0, 1)",
      },
      hoverMarker: {
        visible: true,
        backgroundColor: "#FFA800",
        type: "circle",
        size: 9,
        borderColor: "white",
        borderWidth: 4,
        offsetY: -2,
      },
    },
  ],

  title: {
    visible: false,
  },

  plot: {
    aspect: "line",
    lineWidth: 3,
    lineStyle: "solid",
    lineColor: "#624CE0",
    marker: {
      visible: false,
    },
    hoverState: {
      visible: true,
      shadow: true,
      backgroundColor: "rgba(98, 76, 224, 0.1)",
    },
    hoverMarker: {
      visible: true,
      backgroundColor: "#624CE0",
      type: "circle",
      size: 9,
      borderColor: "white",
      borderWidth: 4,
      offsetY: -2,
    },
    tooltip: {
      backgroundColor: "#000",
      padding: "6 8 8 8",
      borderColor: "#000",
      borderWidth: 0,
      borderRadius: 4,
      lineHeight: 17,
      fontFamily: "Inter",
      text: "%v$ <br>%kl",
      shadow: false,
    },
    animation: {
      effect: "4",
      speed: "1000",
      method: "4",
    },
  },
  crosshairX: {
    lineColor: "black",
    lineStyle: "dashed",
    lineWidth: 1,
    scaleLabel: false,
    plotLabel: {
      visible: false,
    },
    lineSegmentSize: 9,
    exact: true,
  },
};

zingchart.render({
  id: "linesChart",
  data: linesConfig,
  height: "230",
  width: "100%",
});

zingchart.shape_click = function (p) {
  if (p.shapeid == "animation1") {
    zingchart.exec("linesChart", "reload");
  }
};
