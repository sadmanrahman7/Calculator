const BalanceInput = document.querySelector('#Balance');
const RiskPercentageInput = document.querySelector('#RiskPercentage');
const RiskPipsInput = document.querySelector('#RiskPips');
const RewardInput = document.querySelector('#RewardPips');
let LotLabel = document.getElementById('LotSize');
let ContractLabel = document.getElementById('ContractSize');
let CommLabel = document.getElementById('CommValue');
let EquityLabel = document.getElementById('Eq1');
let updatedLabel = document.getElementById('updateSpan');
let RiskLabel = document.getElementById('RiskID');
let RewardLabel = document.getElementById('RewardID');
let RR = document.getElementById('RRatioID');
let BreakevenLabel = document.getElementById('BreakevenID');
const GBP = Number(1);
const GBPUSD = Number(1.3027);
const GBPJPY = Number(137.76);
const GBPCHF = Number(1.1860);
const GBPAUD = Number(1.8022);
const GBPCAD = Number(1.7096);
const GBPNZD = Number(1.9566);
const EURGBP = Number(0.9069);
const GBPSGD = Number(1.77409);

//updated on Open at 11/10/2020



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
    var Currency = "USD";
    let ListVal = document.getElementById("SCID").value;
    let CommVal = document.getElementById("SCID2").value;

    function roundUp(num, precision) {
        precision = Math.pow(10, precision)
        return Math.ceil(num * precision) / precision
      }

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (CommVal === "USD") {
        ExchangeRate = GBPUSD;
        Commision = 5 / ExchangeRate;
        Commission = Commision.toFixed(2)
        Currency = "USD";
    }

    if (CommVal === "EUR") {
        ExchangeRate = EURGBP;
        Commision = 5 * ExchangeRate;
        Commission = Commision.toFixed(2)
        Currency = "EUR";
    }


    if (CommVal === "JPY") {
        ExchangeRate = GBPJPY;
        Commision = 5 * 100 / ExchangeRate;
        Commission = Commision.toFixed(2)
        Currency = "JPY";
    }

    if (CommVal === "CAD") {
        ExchangeRate = GBPCAD;
        Commision = 5 / ExchangeRate;
        Commission = Commision.toFixed(2)
        Currency = "CAD";
    }

    if (CommVal === "CHF") {
        ExchangeRate = GBPCHF;
        Commision = 5 / ExchangeRate;
        Commission = Commision.toFixed(2)
        Currency = "CHF";
    }



    if (CommVal === "AUD") {
        ExchangeRate = GBPAUD;
        Commision = 5 / ExchangeRate;
        Commission = Commision.toFixed(2)
        Currency = "AUD";
    }


    if (CommVal === "NZD") {
        ExchangeRate = GBPNZD;
        Commision = 5 / ExchangeRate;
        Commission = Commision.toFixed(2)
        Currency = "NZD";
    }


    if (CommVal === "GBP") {
        ExchangeRate = GBP;
        Commision = 5 / ExchangeRate;
        Commission = Commision.toFixed(2)
        Currency = "GBP";
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

    if (ListVal === "SGD") {
        ExchangeRate = GBPSGD;
        var LotSize = (BalanceInputNumber * RiskPercentageInDecimals * ExchangeRate) / (RiskPipsInputNumber * 100);
        var LotSizeRounded = LotSize.toFixed(2);
        var ActualRiskValue = (RiskPipsInputNumber * LotSizeRounded) / (ExchangeRate / 10) + (Commission * LotSizeRounded);
        var ActualRewardValue = (RewardInputNumber * LotSizeRounded) / (ExchangeRate / 10) - (Commission * LotSizeRounded);
    }




    const ActualRiskValueRounded = numberWithCommas(ActualRiskValue.toFixed(2));
    const ARV = ActualRiskValue.toFixed(2);
    const ActualRewardValueRounded = numberWithCommas(ActualRewardValue.toFixed(2));
    const AREV = ActualRewardValue.toFixed(2);
    const ActualRiskInPercentage = (ARV / BalanceInputNumber) * 100;
    const ActualRewardInPercentage = (AREV / BalanceInputNumber) * 100;
    const ActualRiskPercentageRounded = ActualRiskInPercentage.toFixed(2);
    const ActualRewardPercentageRounded = ActualRewardInPercentage.toFixed(2);
    const CommisionVariable = (Commision * LotSizeRounded);
    const CommisionRounded = roundUp(CommisionVariable,2);
    const LotCommas = numberWithCommas(LotSizeRounded)


    LotLabel.innerHTML = LotCommas;
    RiskLabel.innerHTML = "£" + `${ActualRiskValueRounded} (${ActualRiskPercentageRounded}`+"%)";
    RewardLabel.innerHTML = "£" + `${ActualRewardValueRounded} (${ActualRewardPercentageRounded}`+"%)";
    var RiskReward = (ActualRewardValueRounded)/(ActualRiskValueRounded);
    var RiskRewardRounded = Math.round(RiskReward * 100) / 100;
    RR.innerHTML = RiskRewardRounded;
    CommLabel.innerHTML =  "£" + CommisionRounded;
    var EquityRounded = numberWithCommas(BalanceInputNumber);
    EquityLabel.innerHTML = "£" + EquityRounded;
    var ContractSize = LotSizeRounded * 100000;
    var ContractSizeRounded = ContractSize.toFixed(2);
    var ContractSizeCommas = numberWithCommas(ContractSizeRounded);
    ContractLabel.innerHTML = ContractSizeCommas + " " + Currency;



    if (RiskRewardRounded < 1) {
        RR.style.color = 'red';
    } else {
        RR.style.color = 'green';
    }

    const BreakevenNumber = (1 - (RiskReward /(RiskReward + 1))) * 100;
    const BreakevenRounded = BreakevenNumber.toFixed(1);
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
