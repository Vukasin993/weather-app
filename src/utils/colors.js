export const getColor = (percentage, percentColors) => {
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (percentage < percentColors[i].percentage) {
            break;
        }
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.percentage - lower.percentage;
    var rangePct = (percentage - lower.percentage) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
}

export const getGradient = (temperature, finalColor) => {
    if (temperature >= -40 && temperature < -30) {
        return `linear-gradient(to bottom right,  #092A79 0%, ${finalColor} 100%)`
    } else if (temperature >= -30 && temperature < -20)  {
        return `linear-gradient(to bottom right,  #092A79 0%,#0D8bd5 50%, ${finalColor} 100%)`
    } else if (temperature >= -20 && temperature < -10) {
        return `linear-gradient(to bottom right,  #092A79 0%,#0D8bd5 33%, #1A9FEA 66%, ${finalColor} 100%)`
    } else if (temperature >= -10 && temperature < 0) {
        return `linear-gradient(to bottom right,  #092A79 0%,#0D8bd5 25%, #1A9FEA 50%, #5BC4FD 75%, ${finalColor} 100%)`
    } else if  (temperature >= 0 && temperature < 10) {
        return `linear-gradient(to bottom right,  #092A79 0%,#0D8bd5 20%, #1A9FEA 40%, #5BC4FD 60%, #9ADCFE 80%, ${finalColor} 100%)`
    } else if (temperature >= 10 && temperature < 20) {
        return `linear-gradient(to bottom right,  #092A79 0%,#0D8bd5 16.66%, #1A9FEA 33.33%, #5BC4FD 49.99%, #9ADCFE 66.65%, #B2DFDC 83.313%, ${finalColor} 100%)`
    } else if (temperature >= 20 && temperature < 30) {
        return `linear-gradient(to bottom right,  #092A79 0%,#0D8bd5 14.28%, #1A9FEA 28.56%, #5BC4FD 42.84%, #9ADCFE 57.12%, #B2DFDC 71.40%, #FED56B 85.28%, ${finalColor} 100%)`
    } else if (temperature >= 30 && temperature <= 40) {
        return `linear-gradient(to bottom right,  #092A79 0%, #0D8bd5 12.5%, #1A9FEA 25%, #5BC4FD 37.5%, #9ADCFE 50%, #B2DFDC 62.5%, #FED56B 75%, #FFBC75 87.5%, ${finalColor} 100%)`
    }
}
