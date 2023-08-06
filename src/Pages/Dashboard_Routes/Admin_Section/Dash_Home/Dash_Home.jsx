import { AiOutlineFile, AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";



const Dash_Home = () => {

    const data = [
        {
            years: 2023,
            tp: 4000
        },
        {
            years: 2020,
            tp: 3000
        },
        {
            years: 2021,
            tp: 2000
        },
        {
            years: 2013,
            tp: 2780
        },
        {
            years: 2020,
            tp: 1890
        },
        {
            years: 2022,
            tp: 2390
        },
        {
            tp: 3490,
            years: 2010
        },
    ];

    const datapie = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
    }


    return (
        <div className="w-[1030px] mx-auto my-10">
            {/* Hospital data */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                {/* Doctors */}
                <div className="w-[100%] h-[100%] bg-white p-10 rounded-lg">
                    <div className="flex items-center mb-8">
                        <div className="w-[70px] h-[70px] text-4xl bg-red-100 text-red-500 flex items-center justify-center rounded-lg mr-4">
                            <AiOutlineUser />
                        </div>
                        <h1 className="text-5xl font-bold text-slate-600">123</h1>
                    </div>
                    <div className="w-[100%] mx-auto flex">
                        <div className="w-[60%] h-[2px] bg-red-500 rounded"></div>
                        <div className="w-[40%] h-[2px] bg-red-50 rounded"></div>
                    </div>
                    <p className="text-xl font-medium text-red-500 mt-3 tracking-[1px]">Doctors</p>
                </div>

                {/* Patients */}
                <div className="w-[100%] h-[100%] bg-white p-10 rounded-lg">
                    <div className="flex items-center mb-8">
                        <div className="w-[70px] h-[70px] text-4xl bg-green-100 text-green-500 flex items-center justify-center rounded-lg mr-4">
                            <AiOutlineTeam />
                        </div>
                        <h1 className="text-5xl font-bold text-slate-600">123</h1>
                    </div>
                    <div className="w-[100%] mx-auto flex">
                        <div className="w-[60%] h-[2px] bg-green-500 rounded"></div>
                        <div className="w-[40%] h-[2px] bg-green-50 rounded"></div>
                    </div>
                    <p className="text-xl font-medium text-green-500 mt-3 tracking-[1px]">Patients</p>
                </div>
                {/* Appoinment */}
                <div className="w-[100%] h-[100%] bg-white p-10 rounded-lg">
                    <div className="flex items-center mb-8">
                        <div className="w-[70px] h-[70px] text-4xl bg-yellow-100 text-yellow-500 flex items-center justify-center rounded-lg mr-4">
                            <AiOutlineFile />
                        </div>
                        <h1 className="text-5xl font-bold text-slate-600">123</h1>
                    </div>
                    <div className="w-[100%] mx-auto flex">
                        <div className="w-[60%] h-[2px] bg-yellow-500 rounded"></div>
                        <div className="w-[40%] h-[2px] bg-yellow-50 rounded"></div>
                    </div>
                    <p className="text-xl font-medium text-yellow-500 mt-3 tracking-[1px]">Appoinment</p>
                </div>
            </div>
            {/* Chart */}
            <div className="grid grid-cols-2 gap-4">
                <div className="w-[100%] h-[100%] rounded-lg p-10 bg-white">
                    <h1 className="text-2xl text-slate-500 font-bold tracking-[1px]">Patients</h1>
                    <div className="w-[100%] mx-auto flex my-4">
                        <div className="w-[60%] h-[2px] bg-slate-500 rounded"></div>
                        <div className="w-[40%] h-[2px] bg-slate-100 rounded"></div>
                    </div>
                    {/* Area Chart for patients on year */}
                    <div className="w-[100%] h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={200}
                                data={data}
                                syncId="anyId"
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="years" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="tp" stroke="#28322" fill="rgba(128, 128, 128, 0.95)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                {/* pie chart */}
                <div className="w-[100%] h-[100%] rounded-lg p-10 bg-white">
                    <h1 className="text-2xl text-slate-500 font-bold tracking-[1px]">Appoinment</h1>
                    <div className="w-[100%] mx-auto flex my-4">
                        <div className="w-[60%] h-[2px] bg-slate-500 rounded"></div>
                        <div className="w-[40%] h-[2px] bg-slate-100 rounded"></div>
                    </div>
                    {/* Appionments */}
                    <div className="w-[100%] h-[250px]" >
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={500} height={500}>
                                <Pie
                                    data={datapie}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dash_Home;