function StudentsSummary({ students }){
    const total = students.length

    const passed = students.filter(student => student.score >= 40).length

    const avgScore =
    total === 0
        ? 0
        : Math.round(
              students.reduce(
                  (sum, student) => sum + Number(student.score),
                  0
              ) / total
          )
    return(<>
    <div className="w-full flex items-center justify-between border border-[#256594]">
        <div className="flex flex-col border border-r-[#256594] flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#00FFE0]/10">
            <div className="flex flex-col">
                <span className="text-[#256594]">TOTAL</span>
                <span className="text-[#00FFE0] text-5xl font-bold">{total}</span>
            </div>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00FFE0] transition-all duration-300 group-hover:w-full"></span>
        </div>
        <div className="flex flex-col border border-r-[#256594] flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#00FFE0]/10">
            <div className="flex flex-col">
                <span className="text-[#256594]">PASSED</span>
                <span className="text-[#00FFE0] text-5xl font-bold">{passed}</span>
            </div>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00FFE0] transition-all duration-300 group-hover:w-full"></span>         
        </div>
        <div className="flex flex-col border border-r-[#256594] flex-1 p-2 relative inline-block group cursor-pointer hover:bg-[#00FFE0]/10">
            <div className="flex flex-col">
                <span className="text-[#256594]">AVG SCORE</span>
                <span className="text-[#00FFE0] text-5xl font-bold">{avgScore}</span>
            </div>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00FFE0] transition-all duration-300 group-hover:w-full"></span>
        </div>
    </div>
    </>
    )
}
export default StudentsSummary;