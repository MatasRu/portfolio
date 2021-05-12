function Animation() {

    const blocks = [
        {width: "95px",
            left: "80%"
        },
        {width: "40px",
            left: "10%"
        },
        {width: "60px",
            left: "70%"
        },
        {width: "150px",
            left: "90%"
        },
        {width: "240px",
            left: "25%"
        },
        {width: "20px",
            left: "100%"
        },
        {width: "35px",
            left: "0"
        },
        {width: "55px",
            left: "55%"
        },
        {width: "100px",
            left: "35%"
        },
    ]
    const blocks2 = [
        {width: "50px",
            left: "10%"
        },
        {width: "40px",
            left: "30%"
        },
        {width: "60px",
            left: "90%"
        },
        {width: "120px",
            left: "100%"
        },
        {width: "240px",
            left: "10%"
        },
        {width: "20px",
            left: "50%"
        },
        {width: "360px",
            left: "70%"
        },
        {width: "100px",
            left: "20%"
        },
        {width: "20px",
            left: "50%"
        },
    ]



    return (
        <div className="bg-animation">
            {blocks.map((item, index) => <div key={index} className="block" style={{width: item.width, height: item.width, left: item.left}} /> )}
            {blocks2.map((item, index) => <div key={index} className="block2" style={{width: item.width, height: item.width, left: item.left}} /> )}
        </div>
    )
}

export default Animation