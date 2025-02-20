import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { VisitorChart } from "../components/VisitorChart";

export const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [filteredStats, setFilteredStats] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [pageVisits, setPageVisits] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://indonesiahalalpartner.com/get_stats.php"
        );
        const data = response.data;

        setStats(data);
        setFilteredStats(data);

        const uniqueIps = new Set(data.map((stat: any) => stat.ip_address));
        setUniqueVisitors(uniqueIps.size);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = event.target.value;
    setSelectedMonth(month);

    if (month === "") {
      setFilteredStats(stats);
      setPageVisits({});
    } else {
      const currentYear = new Date().getFullYear();

      const filtered = stats.filter((stat: any) => {
        if (!stat.visit_time) return false;

        const formattedDate = stat.visit_time.replace(" ", "T");
        const visitDate = new Date(formattedDate);

        if (isNaN(visitDate.getTime())) {
          console.warn(`Invalid date format: ${stat.visit_time}`);
          return false;
        }

        return (
          visitDate.getMonth() + 1 === parseInt(month) &&
          visitDate.getFullYear() === currentYear
        );
      });

      setFilteredStats(filtered);

      const pageVisitsCount: Record<string, Set<string>> = {};
      filtered.forEach((stat: any) => {
        if (!pageVisitsCount[stat.page_visited]) {
          pageVisitsCount[stat.page_visited] = new Set();
        }
        pageVisitsCount[stat.page_visited].add(stat.ip_address);
      });

      const pageVisitsCountFinal: Record<string, number> = {};
      for (const page in pageVisitsCount) {
        pageVisitsCountFinal[page] = pageVisitsCount[page].size;
      }

      setPageVisits(pageVisitsCountFinal);
    }
  };

  const columns = [
    {
      name: "Page Visited",
      selector: (row: any) => row.page_visited,
      sortable: true,
    },
    {
      name: "IP Address",
      selector: (row: any) => row.ip_address,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row: any) => `${row.country}, ${row.region}, ${row.city}`,
      sortable: true,
      grow: 2,
    },
    {
      name: "Visit Date",
      selector: (row: any) => row.visit_time,
      sortable: true,
      grow: 2,
    },
    {
      name: "Visits",
      selector: (row: any) => row.visit_count,
      sortable: true,
    },
  ];

  const customStyles = {
    table: {
      style: {
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        border: "1px solid #E2E8F0",
      },
    },
    header: {
      style: {
        fontSize: "22px",
        fontWeight: "700",
        color: "#1A202C", // Darker text for better contrast
        backgroundColor: "#F7FAFC",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        padding: "20px",
        borderBottom: "2px solid #CBD5E0",
      },
    },
    subHeader: {
      style: {
        backgroundColor: "#F7FAFC",
        minHeight: "52px",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#EDF2F7",
        minHeight: "56px",
        borderBottomWidth: "1px",
        borderBottomColor: "#CBD5E0",
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "600",
        color: "#2D3748",
        backgroundColor: "#EDF2F7",
        padding: "12px 16px",
        borderRight: "1px solid #E2E8F0",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        "&:last-child": {
          borderRight: "none",
        },
      },
      activeSortStyle: {
        color: "#2B6CB0",
        "&:hover": {
          color: "#2C5282",
        },
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        fontWeight: "400",
        color: "#4A5568",
        minHeight: "48px",
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          borderBottomColor: "#E2E8F0",
        },
        "&:hover": {
          backgroundColor: "#F7FAFC",
          transition: "all .2s ease-in-out",
          transform: "translateY(-1px)",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,0.05)",
        },
        cursor: "pointer",
      },
      stripedStyle: {
        backgroundColor: "#F7FAFC",
      },
      selectedHighlightStyle: {
        backgroundColor: "#EBF4FF",
        color: "#2B6CB0",
        fontWeight: "500",
      },
    },
    cells: {
      style: {
        padding: "12px 16px",
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "#E2E8F0",
        },
      },
    },
    pagination: {
      style: {
        fontSize: "13px",
        minHeight: "56px",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "#E2E8F0",
        backgroundColor: "#F7FAFC",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      },
      pageButtonsStyle: {
        borderRadius: "6px",
        height: "32px",
        minWidth: "32px",
        padding: "0 6px",
        margin: "0 4px",
        cursor: "pointer",
        transition: "0.2s ease-in-out",
        backgroundColor: "#ffffff",
        border: "1px solid #E2E8F0",
        "&:disabled": {
          cursor: "unset",
          color: "#A0AEC0",
          fill: "#A0AEC0",
        },
        "&:hover:not(:disabled)": {
          backgroundColor: "#EDF2F7",
        },
        "&:focus": {
          outline: "none",
          boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.5)",
        },
      },
    },
    noData: {
      style: {
        padding: "24px",
        backgroundColor: "#F7FAFC",
        borderRadius: "8px",
        color: "#4A5568",
        fontSize: "16px",
      },
    },
    progress: {
      style: {
        backgroundColor: "#F7FAFC",
        color: "#2B6CB0",
      },
    },
    expanderRow: {
      style: {
        backgroundColor: "#F7FAFC",
        color: "#4A5568",
      },
    },
  };

  const getThemedStyles = (theme = "light") => {
    const themes: any = {
      light: customStyles,
      dark: {
        ...customStyles,
        table: {
          style: {
            ...customStyles.table.style,
            backgroundColor: "#1A202C",
            border: "1px solid #2D3748",
          },
        },
        header: {
          style: {
            ...customStyles.header.style,
            backgroundColor: "#2D3748",
            color: "#F7FAFC",
            borderBottom: "2px solid #4A5568",
          },
        },
      },
    };

    return themes[theme] || themes.light;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Visitor Statistics
          </h1>
          <p className="text-lg font-medium text-gray-600">
            A detailed overview of your website visitors
          </p>
        </div>

        <VisitorChart stats={stats} />

        <div className="flex items-center justify-between my-6">
          <div className="text-lg font-medium text-gray-700">
            Total Visitor Website:{" "}
            <span className="text-xl font-bold text-green-600">
              {uniqueVisitors}
            </span>
          </div>

          <div>
            <label className="text-gray-700 font-medium mr-4">
              Filter by Month:
            </label>
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">All</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>

        {selectedMonth != "" && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Page Visits in Selected Month
            </h2>
            {Object.keys(pageVisits).length > 0 ? (
              <ul className="list-disc list-inside mt-2">
                {Object.entries(pageVisits).map(([page, count]) => (
                  <li key={page} className="text-gray-600">
                    <strong>{page}</strong>: {count} visitor website
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">
                No data available for this month.
              </p>
            )}
          </div>
        )}

        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={filteredStats}
            pagination
            highlightOnHover
            defaultSortFieldId={1}
            customStyles={getThemedStyles("light")}
          />
        </div>
      </div>
    </div>
  );
};
