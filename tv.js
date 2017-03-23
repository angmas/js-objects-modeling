const tv = {
  powerStatus: 'ON',
  volumeLevel: 5,
  channelNumber: 7,
  display: {
    type: 'plasma',
    resolution: '1080px'
  },
  powerUsage: '150 watts',

  togglePower: function () {
    if (this.powerStatus === 'ON') {
      this.powerStatus = 'OFF'
    } else {
      this.powerStatus = 'ON'
    }
  },

  increaseVolume: function () {
    this.volumeLevel++
  },
  decreaseVolume: function () {
      this.volumeLevel--
  },
  increaseChannel: function () {
    this.channelNumber++
  },
  decreaseChannel: function () {
    this.channelNumber--
  }
}
