import React from 'react'

export class PodsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("https://octopus-collector.herokuapp.com/pods")
            .then(response => response.json())
            .then(findresponse => {
                this.setState({
                    data: [findresponse]
                })
            })
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <th>id</th>
                    <th>node</th>
                    <th>address</th>
                    <th>service_id</th>
                    <th>service_address</th>
                    <th>service_port</th>
                </tr>
                {
                    this.state.data.map((value, index) => {
                        return value["response"].map(data => {
                            return (
                                <tr>
                                    <td>{data["id"]}</td>
                                    <td>{data["node"]}</td>
                                    <td>{data["address"]}</td>
                                    <td>{data["service_id"]}</td>
                                    <td>{data["service_port"]}</td>
                                </tr>
                            )
                        })
                    })
                }
                </tbody>
            </table>
        )
    }
}
