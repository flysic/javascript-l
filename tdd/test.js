testCase("strftime test", {
  setUp : function() {
    this.date = new Date(2009, 3, 14, 20, 59, 30);
  },
  "test format specifier %Y" : function() {
    assert("%Y should return full year", this.date.strftime("%Y")==this.date.getFullYear());
  },
  "test format specifier %m" : function() {
    assert("%m should return month", this.date.strftime("%m")=="04");
  },
  "test format specifier %d" : function() {
    assert("%d should rturn day", this.date.strftime("%d")==this.date.getDate());
  },
  "test format specifier %y" : function() {
    assert("%y should return year as two digits", this.date.strftime("%y")=="09");
  },
  "test format specifier %F" : function() {
    assert("%F should return act as %Y=%m-%d", this.date.strftime("%F")=="2009-04-14");
  }
});
