const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>22/04/2021</td>
                        <td>Alexandra Ortiz</td>
                        <td>22</td>
                        <td>12</td>
                        <td>5017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Nícolas Ramos</td>
                        <td>34</td>
                        <td>25</td>
                        <td>45961.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Paola da Silva</td>
                        <td>29</td>
                        <td>8</td>
                        <td>55421.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Manoel Alcantara</td>
                        <td>12</td>
                        <td>7</td>
                        <td>60000.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Petrusca Nonnia</td>
                        <td>40</td>
                        <td>32</td>
                        <td>17017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Oscar Monteiro</td>
                        <td>22</td>
                        <td>10</td>
                        <td>10980.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Cristiano Müller</td>
                        <td>62</td>
                        <td>41</td>
                        <td>46023.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Baxter Zulão</td>
                        <td>8</td>
                        <td>7</td>
                        <td>12740.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
