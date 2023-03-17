let dummyData = [
    {
	"id": 1,
	"temperature": 20.20
    },
    {
	"id": 2,
	"temperature": 30
    }
];

export const getTemperature = (req, res) => {
    res.status(200).json(dummyData);
};
