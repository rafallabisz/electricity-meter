import { Container, Row, Col } from "react-bootstrap";
import styles from '../App.module.scss';
import Background from '../assets/background.jpg'
import React, { useEffect, useState } from 'react';
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
import DayPicker from "react-day-picker";
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/pl';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

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

export function getWeekDays(weekStart: Date) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(moment(weekStart).add(i, 'days').toDate());
  }
  return days;
}

export function getWeekRange(date: Date) {
  return {
    from: moment(date).startOf('week').toDate(),
    to: moment(date).endOf('week').toDate(),
  };
}

const values = [{date:'17-05-2021', data:[2.15]}, {date:'10-05-2021', data:[1.10, 2.75, 1.1, 0.82, 1.41,2.18,2.01]},{date:'03-05-2021', data:[0.85, 1.1, 1.05, 1.4, 1.1,2.98,2.01]}]

const Dashboard: React.FC<DashboardProps> = (props) => {
  const currentWeek = getWeekDays(getWeekRange(new Date()).from);
  const [selectedDays, setSelectedDays] = useState<Date[]>(currentWeek);
  const startDate = moment(selectedDays[0]).format('DD-MM-YYYY');

  const handleDayChange = (date: Date) => {
    setSelectedDays(getWeekDays(getWeekRange(date).from));
  };

  const handleWeekClick = (weekNumber: number, days: Date[], e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedDays(days);
  };


  useEffect(()=>{
    let app: any = {};
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);

    const xAxisSeries = selectedDays.map(date=> moment(date).format('DD-MM-YYYY'));

    const dataSeries = values.filter(value=> value.date === startDate);    

    console.log(dataSeries,'dataSeries');
    

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
        text: !!dataSeries.length? 'Średnie zużycie w ciągu dnia':"Brak danych", 
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
          data: xAxisSeries,
          // data: ['05.05.2021','06.05.2021','07.05.2021','08.05.2021','09.05.2021','10.05.2021','11.05.2021'],
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
            data: dataSeries[0]? dataSeries[0].data:[]
            // data: [2.15, 1.75, 2.34, 2.82, 2.41,2.22,2.17]
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

  },[selectedDays, startDate])
  return (
    <main className={styles.mainWrap} style={{background:`url(${Background})`}}>
      <Container>
        <Row>
          <Col>
          <h3>Wykres</h3>
          <h6>Wybierz datę</h6>
          <DayPicker
            showOutsideDays
            selectedDays={selectedDays}
            onDayClick={handleDayChange}
            onWeekClick={handleWeekClick}
            localeUtils={MomentLocaleUtils} locale={'pl'}
            className={styles.calendarBgc}
          />
          <div id="main" style={{ height: '500px' }}></div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Dashboard