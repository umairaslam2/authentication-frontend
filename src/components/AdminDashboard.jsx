import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  const recruitmentData = [
    { name: "IT Enable Services", value: 8, color: "#00BFFF" },
    { name: "Web Development", value: 5, color: "#FFD700" },
    { name: "Desktop Development", value: 1, color: "#6A5ACD" },
    { name: "Digital Marketing", value: 2, color: "#32CD32" },
    { name: "Mobile Development", value: 1, color: "#FF4500" },
    { name: "Administrator", value: 2, color: "#A020F0" },
    // { name: "HR", value: 1, color: "#FF1493" },
  ];



  const attendanceData = [
    { day: "Sun", present: 0, absent: 0, leave: "Off" },
    { day: "Mon", present: 15, absent: 3, leave: 7 },
    { day: "Tue", present: 19, absent: 5, leave: 1 },
    { day: "Wed", present: 20, absent: 3, leave: 2 },
    { day: "Thu", present: 21, absent: 2, leave: 2 },
    { day: "Fri", present: 18, absent: 4, leave: 3 },
    { day: "Sat", present: 0, absent: 0, leave: "Off" },
  ];


    const employlist = [
      { name: "Muhammad Umair", department: "IT Enable Services", yesterdayStatus: "Present" },
      { name: "Abdul Rafay", department: "Administrator", yesterdayStatus: "Present" },
      { name: "Ubaid Ahmed", department: "Web Development", yesterdayStatus: "Leave" },
      { name: "Bilal Raza", department: "Mobile Development", yesterdayStatus: "Leave" },
      { name: "Usama Khan", department: "Desktop Development", yesterdayStatus: "Absent" },
      { name: "Gohar Ramzan", department: "HR", yesterdayStatus: "Present" },
      { name: "Muhammad Umair", department: "IT Enable Services", yesterdayStatus: "Present" },
      { name: "Abdul Rafay", department: "Administrator", yesterdayStatus: "Present" },
      { name: "Ubaid Ahmed", department: "Web Development", yesterdayStatus: "Present" },
      { name: "Bilal Raza", department: "Mobile Development", yesterdayStatus: "Absent" },
      { name: "Usama Khan", department: "Desktop Development", yesterdayStatus: "Absent" },
      { name: "Gohar Ramzan", department: "HR", yesterdayStatus: "Absent" },
    ];

  const leaveApplications = [
    { name: "Maisha Lucy", department: "IT", status: "Absent" },
    { name: "Zamora Peck", department: "HR", status: "Absent" },
    { name: "Amy Aphrodite", department: "Finance", status: "Absent" },
    { name: "Maisha Lucy", department: "Marketing", status: "Absent" },
    { name: "Maisha Lucy", department: "IT", status: "Absent" },
    { name: "Zamora Peck", department: "HR", status: "Absent" },
    { name: "Amy Aphrodite", department: "Finance", status: "Absent" },
    { name: "Maisha Lucy", department: "Marketing", status: "Absent" },
    
  ];

  const data = [
    { name: "Sick Leave", value: 3, color: "#FF6B6B" },  
    { name: "Late Arrive", value: 7, color: "#FFB830" }, 
    { name: "On Time", value: 10, color: "#1E88E5" },  
  ]
  

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const attendancePercentage = Math.round(((data[2].value + data[1].value) / total) * 100);




  return (
    <div className="flex">
    
      <div className="flex-1 min-h-screen bg-gray-100 p-4 w-full md:w-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input type="text" placeholder="Search your data" className="border p-2 rounded-lg w-full md:w-1/3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h2 className="text-lg font-semibold">Total Employees</h2>
            <p className="text-3xl font-bold text-blue-600">20</p>
          
          </div>
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h2 className="text-lg font-semibold">Today Presents</h2>
            <p className="text-3xl font-bold text-blue-600">10</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h2 className="text-lg font-semibold">Today Absents</h2>
            <p className="text-3xl font-bold text-blue-600">6</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg text-center">
            <h2 className="text-lg font-semibold">Today Leave</h2>
            <p className="text-3xl font-bold text-blue-600">4</p>
          </div>
        </div>

        

         {/* Charts   */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Department Overview</h2>
            <div className="flex items-center">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={recruitmentData}
                    dataKey="value"
                    cx="50%"
                    cy="100%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                  >
                    {recruitmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name) => [`${value}`, name]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="ml-6">
                {recruitmentData.map((dept, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <span className="w-4 h-4 mr-2" style={{ backgroundColor: dept.color }}></span>
                    <span className="text-sm">{dept.value} {dept.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Daily Attendance */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Daily Attendance</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={attendanceData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="present" fill="#4F46E5" />
                <Bar dataKey="absent" fill="#EC4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>

      <div className="bg-white p-3 shadow rounded-lg flex flex-col items-center">
      <h2 className="text-lg font-semibold">Attendance Rate</h2>
      <div className="text-3xl font-bold">{attendancePercentage}%</div>

      {/* Pie Chart */}
      <PieChart width={250} height={180} className="">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80} 
          fill="#8884d8"
          dataKey="value"
          label={false}
          activeShape={{ stroke: "none" }}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        
        <Tooltip
          cursor={{ fill: "transparent" }} 
          contentStyle={{ border: "none", borderRadius: "6px", backgroundColor: "rgba(120, 112, 60)", color: "#fff",  }} 
        />
      </PieChart>

      {/* Legend */}
      <div className=" flex space-x-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
            <span className="text-sm">{item.name} ({item.value})</span>
          </div>
        ))}
      </div>
    </div>

        </div>

          <div className=" mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
  
    <div className="bg-white p-4 shadow rounded-lg md:col-span-3">
            <h2 className="text-lg font-semibold mb-2">Yesterday Status</h2>
            <div className="max-h-64 overflow-y-auto"> 
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Department</th>
                  <th className="border border-gray-300 p-2">Yesterday Status</th>
                </tr>
              </thead>
              <tbody>
              {employlist.map((employee, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{employee.name}</td>
                <td className="border border-gray-300 p-2">{employee.department}</td>
                <td className="border border-gray-300 p-2">
                  <span
                    className={`px-2 py-1 text-sm font-semibold rounded-lg 
                      ${
                        employee.yesterdayStatus === "Present"
                          ? "text-green-600 bg-green-100"
                          : employee.yesterdayStatus === "Leave"
                          ? "text-yellow-600 bg-yellow-100"
                          : employee.yesterdayStatus === "Absent"
                          ? "text-red-600 bg-red-100"
                          : "text-gray-600 bg-gray-100"
                      }`}
                  >
                    {employee.yesterdayStatus}
                  </span>
                </td>
              </tr>
            ))}

              </tbody>
            </table>
          </div>
          </div>

          <div className="bg-white p-4 shadow rounded-lg md:col-span-1">
    <h2 className="text-lg font-semibold">Today Absent</h2>
    <div className="max-h-64 overflow-y-auto"> {/* Added scrolling here */}
      <ul>
        {leaveApplications.map((app, index) => (
          <li key={index} className="flex justify-between items-center py-2 border-b">
            <div>
              <p className="font-semibold">{app.name}</p>
              <p className="text-sm text-gray-500">Department: {app.department}</p>
            </div>
            <span className="px-2 py-1 text-sm font-semibold rounded-lg text-red-600 bg-red-100">
              {app.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>

        </div>

        </div>
      </div>
    );
  };

export default Dashboard;
