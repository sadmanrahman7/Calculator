// This is a comment
const BalanceInput = document.querySelector('#Balance');
const RiskPercentageInput = document.querySelector('#RiskPercentage');
const RiskPipsInput = document.querySelector('#RiskPips');
const RewardInput = document.querySelector('#RewardPips');
let LotLabel = document.getElementById('LotSize');
let CommLabel = document.getElementById('CommValue');
let updatedLabel = document.getElementById('updateSpan');
let RiskLabel = document.getElementById('RiskID');
let RewardLabel = document.getElementById('RewardID');
let RR = document.getElementById('RRatioID');
let BreakevenLabel = document.getElementById('BreakevenID');
const GBP = Number(1);
const GBPUSD = Number(1.23294);
const GBPJPY = Number(132.196);
const GBPCHF = Number(1.16870);
const GBPAUD = Number(1.79613);
const GBPCAD = Number(1.53537);
const GBPNZD = Number(1.91983);
const EURGBP = Number(0.90890);

//updated on 28/06/2020



function SaveLocalStorage() {
    localStorage._balance = BalanceInput.value;
    localStorage._riskpips = RiskPipsInput.value;
    localStorage._riskpercentage = RiskPercentageInput.value;
    localStorage._rewardpips = RewardInput.value;
    localStorage._select1 = ExtListVal;
    localStorage._select2 = ExtCommVal;
}

function LoadLocalStorage() {
    BalanceInput.value = localStorage._balance;
    RiskPipsInput.value = localStorage._riskpips;
    RiskPercentageInput.value = localStorage._riskpercentage;
    RewardInput.value = localStorage._rewardpips;
    ExtListVal = localStorage._select1;
    ExtCommVal = localStorage._select2;
}

LoadLocalStorage();
CalculateLotSize();

function CalculateLotSize() {
    const BalanceInputNumber = Number(BalanceInput.value);
    const RiskPipsInputNumber = Number(RiskPipsInput.value);
    const RewardInputNumber = Number(RewardInput.value);
    const RiskPercentageInDecimals = Number(RiskPercentageInput.value / 10);
    var ExchangeRate = Number(GBPUSD);
    let ListVal = document.getElementById("SCID").value;
    let CommVal = document.getElementById("SCID2").value;



    if (CommVal === "USD") {
        ExchangeRate = GBPUSD;
        Commision = 6 / ExchangeRate;
        Commission = Commision.toFixed(2)
    }

    if (CommVal === "EUR") {
        ExchangeRate = EURGBP;
        Commision = 6 * ExchangeRate;
        Commission = Commision.toFixed(2)
    }


    if (CommVal === "JPY") {
        ExchangeRate = GBPJPY;
        Commision = 6 * 100 / ExchangeRate;
        Commission = Commision.toFixed(2)
    }

    if (CommVal === "CAD") {
        ExchangeRate = GBPCAD;
        Commision = 6 / ExchangeRate;
        Commission = Commision.toFixed(2)
    }

    if (CommVal === "CHF") {
        ExchangeRate = GBPCHF;
        Commision = 6 / ExchangeRate;
        Commission = Commision.toFixed(2)
    }



    if (CommVal === "AUD") {
        ExchangeRate = GBPAUD;
        Commision = 6 / ExchangeRate;
        Commission = Commision.toFixed(2)
    }


    if (CommVal === "NZD") {
        ExchangeRate = GBPNZD;
        Commision = 6 / ExchangeRate;
        Commission = Commision.toFixed(2)
    }


    if (CommVal === "GBP") {
        ExchangeRate = GBP;
        Commision = 6 / ExchangeRate;
        Commission = Commision.toFixed(2)
    }

    if (ListVal === "USD") {
        ExchangeRate = GBPUSD;
        var LotSize = (BalanceInputNumber * RiskPercentageInDecimals * ExchangeRate) / (RiskPipsInputNumber * 100);
        var LotSizeRounded = LotSize.toFixed(2);
        var ActualRiskValue = (RiskPipsInputNumber * LotSizeRounded) / (ExchangeRate / 10) + (Commission * LotSizeRounded) ;
        var ActualRewardValue = (RewardInputNumber * LotSizeRounded) / (ExchangeRate / 10) - (Commission * LotSizeRounded);

    }

    if (ListVal === "JPY") {
        ExchangeRate = GBPJPY;
        var LotSize = (BalanceInputNumber * RiskPercentageInDecimals * ExchangeRate) / (RiskPipsInputNumber * 100 * 100);
        var LotSizeRounded = LotSize.toFixed(2);
        var ActualRiskValue = (RiskPipsInputNumber * LotSizeRounded) / (ExchangeRate / 1000) + (Commission * LotSizeRounded);
        var ActualRewardValue = (RewardInputNumber * LotSizeRounded) / (ExchangeRate / 1000) - (Commission * LotSizeRounded);
    }

    if (ListVal === "CAD") {
        ExchangeRate = GBPCAD;
        var LotSize = (BalanceInputNumber * RiskPercentageInDecimals * ExchangeRate) / (RiskPipsInputNumber * 100);
        var LotSizeRounded = LotSize.toFixed(2);
        var ActualRiskValue = (RiskPipsInputNumber * LotSizeRounded) / (ExchangeRate / 10) + (Commission * LotSizeRounded);
        var ActualRewardValue = (RewardInputNumber * LotSizeRounded) / (ExchangeRate / 10) - (Commission * LotSizeRounded);
    }

    if (ListVal === "CHF") {
        ExchangeRate = GBPCHF;
        var LotSize = (BalanceInputNumber * RiskPercentageInDecimals * ExchangeRate) / (RiskPipsInputNumber * 100);
        var LotSizeRounded = LotSize.toFixed(2);
        var ActualRiskValue = (RiskPipsInputNumber * LotSizeRounded) / (ExchangeRate / 10) + (Commission * LotSizeRounded);
        var ActualRewardValue = (RewardInputNumber * LotSizeRounded) / (ExchangeRate / 10) - (Commission * LotSizeRounded);
    }

    if (ListVal === "AUD") {
        ExchangeRate = GBPAUD;
        var LotSize = (BalanceInputNumber * RiskPercentageInDecimals * ExchangeRate) / (RiskPipsInputNumber * 100);
        var LotSizeRounded = LotSize.toFixed(2);
        var ActualRiskValue = (RiskPipsInputNumber * LotSizeRounded) / (ExchangeRate / 10) + (Commission * LotSizeRounded);
        var ActualRewardValue = (RewardInputNumber * LotSizeRounded) / (ExchangeRate / 10) - (Commission * LotSizeRounded);
    }
    if (ListVal === "NZD") {
        ExchangeRate = GBPNZD;
        var LotSize = (BalanceInputNumber * RiskPercentageInDecimals * ExchangeRate) / (RiskPipsInputNumber * 100);
        var LotSizeRounded = LotSize.toFixed(2);
        var ActualRiskValue = (RiskPipsInputNumber * LotSizeRounded) / (ExchangeRate / 10) + (Commission * LotSizeRounded);
        var ActualRewardValue = (RewardInputNumber * LotSizeRounded) / (ExchangeRate / 10) - (Commission * LotSizeRounded);
    }

    if (ListVal === "GBP") {
        ExchangeRate = GBP;
        var LotSize = (BalanceInputNumber * RiskPercentageInDecimals * ExchangeRate) / (RiskPipsInputNumber * 100);
        var LotSizeRounded = LotSize.toFixed(2);
        var ActualRiskValue = (RiskPipsInputNumber * LotSizeRounded) / (ExchangeRate / 10) + (Commission * LotSizeRounded);
        var ActualRewardValue = (RewardInputNumber * LotSizeRounded) / (ExchangeRate / 10) - (Commission * LotSizeRounded);
    }


    const ActualRiskValueRounded = ActualRiskValue.toFixed(2);
    const ActualRewardValueRounded = ActualRewardValue.toFixed(2);
    const ActualRiskInPercentage = (ActualRiskValueRounded / BalanceInputNumber) * 100;
    const ActualRewardInPercentage = (ActualRewardValueRounded / BalanceInputNumber) * 100;
    const ActualRiskPercentageRounded = ActualRiskInPercentage.toFixed(2);
    const ActualRewardPercentageRounded = ActualRewardInPercentage.toFixed(2);
    const CommisionRounded = (Commision * LotSizeRounded).toFixed(2);

    LotLabel.innerHTML = LotSizeRounded;
    RiskLabel.innerHTML = "£" + `${ActualRiskValueRounded} (${ActualRiskPercentageRounded}`+"%)";
    RewardLabel.innerHTML = "£" + `${ActualRewardValueRounded} (${ActualRewardPercentageRounded}`+"%)";
    var RiskReward = (ActualRewardValueRounded)/(ActualRiskValueRounded);
    var RiskRewardRounded = Math.round(RiskReward * 100) / 100;
    RR.innerHTML = RiskRewardRounded;
    CommLabel.innerHTML =  "£" + CommisionRounded;


    if (RiskRewardRounded < 1) {
        RR.style.color = 'red';
    } else {
        RR.style.color = 'green';
    }

    const BreakevenNumber = (1 - (RiskReward /(RiskReward + 1))) * 100;
    const BreakevenRounded = BreakevenNumber.toFixed(0);
    BreakevenLabel.innerHTML = BreakevenRounded + "%";

    if (BreakevenRounded < 50) {
        BreakevenLabel.style.color = 'green';
    } else {
        BreakevenLabel.style.color = 'orange';
    }

    SaveLocalStorage();


}


    BalanceInput.addEventListener('input', CalculateLotSize);
    RiskPercentageInput.addEventListener('input', CalculateLotSize);
    RiskPipsInput.addEventListener('input', CalculateLotSize);
    RewardInput.addEventListener('input', CalculateLotSize);
