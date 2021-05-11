import { Container, Row, Col } from "react-bootstrap";
import styles from '../App.module.scss';
import Background from '../assets/background.jpg'
import React, { useEffect } from 'react';
// Include the locale utils designed for moment
import * as echarts from 'echarts/core';
// Import bar charts, all with Chart suffix
import { BarChart, BarSeriesOption, LineSeriesOption } from 'echarts/charts';
// import the tooltip, title, and rectangular coordinate system components, all suffixed with Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  GridComponentOption,
  TitleComponentOption,
  ToolboxComponent,
  LegendComponent,
} from 'echarts/components';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from 'echarts/renderers';

// Combine an Option type with only required components and charts via ComposeOption
type ECOption = echarts.ComposeOption<BarSeriesOption | LineSeriesOption | TitleComponentOption | GridComponentOption>;

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  ToolboxComponent,
  LegendComponent,
]);


interface DashboardProps {
  
}

const Dashboard: React.FC<DashboardProps> = (props) => {

  useEffect(()=>{
    let app: any = {};
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    let option: ECOption;

    const posList = [
      'left',
      'right',
      'top',
      'bottom',
      'inside',
      'insideTop',
      'insideLeft',
      'insideRight',
      'insideBottom',
      'insideTopLeft',
      'insideTopRight',
      'insideBottomLeft',
      'insideBottomRight',
    ];

    app.configParameters = {
      rotate: {
        min: -90,
        max: 90,
      },
      align: {
        options: {
          left: 'left',
          center: 'center',
          right: 'right',
        },
      },
      verticalAlign: {
        options: {
          top: 'top',
          middle: 'middle',
          bottom: 'bottom',
        },
      },
      position: {
        options: posList.reduce(function (map: any, pos) {
          map[pos] = pos;
          return map;
        }, {}),
      },
      distance: {
        min: 0,
        max: 100,
      },
    };

    //config
    app.config = {
      rotate: 90,
      align: 'left',
      verticalAlign: 'middle',
      position: 'insideBottom',
      distance: 15,
      onChange: function () {
        var labelOption = {
          normal: {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance,
          },
        };
        myChart.setOption({
          series: [
            {
              label: labelOption,
            },
            {
              label: labelOption,
            },
            {
              label: labelOption,
            },
            {
              label: labelOption,
            },
          ],
        });
      },
    };

    const labelOption = {
      show: true,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {},
      },
    };

    option = {
      title: {
        // show: !!!dashboardFlatData?.length,
        textStyle: {
          color: 'gray',
          fontSize: 18,
        },
        text: 'Średnie zużycie w ciągu dnia',
        left: 'center',
        top: 'top',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        // data: ['05.05.2021','06.05.2021','07.05.2021','08.05.2021','09.05.2021','10.05.2021','11.05.2021'],
        bottom: '0',
      },
      toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['05.05.2021','06.05.2021','07.05.2021','08.05.2021','09.05.2021','10.05.2021','11.05.2021'],
        },
      ],
      yAxis: [
        { 
          type: 'value',
        },
      ],
      series: [
        {
            name: 'kWh/doba',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [2.15, 1.75, 2.34, 2.82, 2.41,2.22,2.17]
        },
        // {
        //     name: 'Steppe',
        //     type: 'bar',
        //     label: labelOption,
        //     emphasis: {
        //         focus: 'series'
        //     },
        //     data: [220, 182, 191, 234, 290]
        // },
        // {
        //     name: 'Desert',
        //     type: 'bar',
        //     label: labelOption,
        //     emphasis: {
        //         focus: 'series'
        //     },
        //     data: [150, 232, 201, 154, 190]
        // },
        // {
        //     name: 'Wetland',
        //     type: 'bar',
        //     label: labelOption,
        //     emphasis: {
        //         focus: 'series'
        //     },
        //     data: [98, 77, 101, 99, 40]
        // }
    ]
    };

    option && myChart.setOption(option, true);

  },[])
  return (
    <main className={styles.mainWrap} style={{background:`url(${Background})`}}>
      <Container>
        <Row>
          <Col>
          <h3>Wykresy</h3>
          <div id="main" style={{ height: '550px' }}></div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Dashboard