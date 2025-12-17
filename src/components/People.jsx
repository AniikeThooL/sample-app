

export const People = ()=>{

    return (
        <div id="people" className="container">
            <h1>People</h1>
            <table className="people_table">
                <tbody>
                    <tr className="people_column">
                        <td className="people_rows">1</td>
                        <td className="people_rows">Governing Body</td>
                        <td className="people_rows link">
                            <a href="/Governing Body.pdf" download><img src="/file.png" alt="" /></a>
                        </td>
                    </tr>
                    <tr>
                        <td className="people_rows">2</td>
                        <td className="people_rows">General Members</td>
                        <td className="people_rows link">
                            <a href="?"><img src="/file.png" alt="" /></a>
                        </td>
                    </tr>
                    <tr>
                        <td className="people_rows">3</td>
                        <td className="people_rows">Membership Form</td>
                        <td className="people_rows link">
                            <a href="?"><img src="/file.png" alt="" /></a>
                        </td>
                    </tr>
                    {/* <tr>
                        <td className="people_rows">4</td>
                        <td className="people_rows"></td>
                        <td className="people_rows link">
                            <a href="?"><img src="/file.png" alt="" /></a>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}