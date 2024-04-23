import { grey_line } from '../assets'
import Text from '../../ui/text'
import colors from '../../../utils/colors'
import { TTransaction } from '../../../types'
import { formatDate } from '../../../utils/formatDate'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
interface IProps {
    trxData: TTransaction[] | undefined
}
const Graph = ({ trxData }: IProps) => {
    const labels = trxData?.map((data) => (formatDate(data.date)))
    const prices = trxData?.map((data) => (data.amount))
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        elements: {
            line: {
                borderWidth: 2,
                tension: 0.4,
            },
            point: {
                radius: 0,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    maxTicksLimit: 5,
                }
            },
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                },
                ticks: {
                    display: false,
                },
                border: {
                    display: false
                }
            },
        },
        maintainAspectRatio: false,
    };



    const data = {
        labels: labels?.slice()?.reverse(),
        datasets: [
            {
                data: prices?.slice()?.reverse(),
                borderColor: colors.orange_100,
            },
        ],
    };

    return (
        <div>
            {
                (trxData && trxData?.length > 0) ?
                    <>
                        <div className=''>
                            <div style={{ height: '200px', backgroundColor: 'rgba(255, 255, 255, 0)' }}>
                                <Line data={data} options={options} />
                            </div>
                            <img src={grey_line} alt='line' className='w-[95%] mt-3 ml-[30px]' />
                        </div>
                        <div className='w-full flex justify-between mt-1'>
                            <Text testId ='bottom-text' color={colors.grey_400} fontSize='12px' fontWeight={500} lineHeight='14px'>{labels?.[labels.length - 1]}</Text>
                            <Text testId ='bottom-text' color={colors.grey_400} fontSize='12px' fontWeight={500} lineHeight='14px'>{labels?.[0]}</Text>
                        </div>
                    </> :
                    <Text color={'red'} fontSize='16px' fontWeight={600} lineHeight='24px'>{`No data available`}</Text>

            }
        </div>
    )
}

export default Graph