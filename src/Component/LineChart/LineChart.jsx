
// import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// export default function LineChart() {

//     const studentsData = [
//   { "id": 1, "student": "Alice", "Math": 85, "Science": 90, "English": 78, "History": 88, "Art": 95 },
//   { "id": 2, "student": "Bob", "Math": 70, "Science": 75, "English": 80, "History": 65, "Art": 60 },
//   { "id": 3, "student": "Charlie", "Math": 95, "Science": 85, "English": 92, "History": 90, "Art": 80 },
//   { "id": 4, "student": "Diana", "Math": 60, "Science": 65, "English": 70, "History": 75, "Art": 85 },
//   { "id": 5, "student": "Ethan", "Math": 88, "Science": 92, "English": 84, "History": 80, "Art": 90 }
// ]


//     return (
//         <div>
//             {/* <LChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}  data={studentsData}>
//                  <Line type="monotone" dataKey="Math"></Line>
//             </LChart> */}

//               <LChart
//                 width={600}
//                 height={400}
//                 data={studentsData}
//                 margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="student" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                  <Line type="monotone" dataKey="Math"> </Line>
//             </LChart>


//         </div>
//     )
// }
import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function LineChart() {

    const studentsData = [
        { id: 1, student: "Alice", Math: 85, Science: 90, English: 78, History: 88, Art: 95 },
        { id: 2, student: "Bob", Math: 70, Science: 75, English: 80, History: 65, Art: 60 },
        { id: 3, student: "Charlie", Math: 95, Science: 85, English: 92, History: 90, Art: 80 },
        { id: 4, student: "Diana", Math: 60, Science: 65, English: 70, History: 75, Art: 85 },
        { id: 5, student: "Ethan", Math: 88, Science: 92, English: 84, History: 80, Art: 90 }
    ];

    return (
        <div>
            <LChart
                width={600}
                height={400}
                data={studentsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3  3" />
                <XAxis dataKey="student" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Math" stroke="#8884d8" />
                <Line type="monotone" dataKey="History" stroke="#8884d8" />


            </LChart>
        </div>
    )
}
