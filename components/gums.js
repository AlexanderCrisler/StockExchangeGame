import {StyleSheet, Text, View} from 'react-native';

// Version 4.1
const pSBC=(p,c0,c1,l)=>{
	let r,g,b,P,f,t,h,m=Math.round,a=typeof(c1)=="string";
	if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
	h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=pSBC.pSBCr(c0),P=p<0,t=c1&&c1!="c"?pSBC.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
	if(!f||!t)return null;
	if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
	else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
	a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
	if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
	else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

pSBC.pSBCr=(d)=>{
	const i=parseInt;
	let n=d.length,x={};
	if(n>9){
		const [r, g, b, a] = (d = d.split(','));
	        n = d.length;
		if(n<3||n>4)return null;
		x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
	}else{
		if(n==8||n==6||n<4)return null;
		if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
		d=i(d.slice(1),16);
		if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=Math.round((d&255)/0.255)/1000;
		else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
	}return x
};

function hexToRgbPrimary(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [
    "rgb(",
    ((parseInt(result[1], 16) > 200) ? 255 : 50),
    ",",
    ((parseInt(result[2], 16) > 200) ? 255 : 50),
    ",",
    ((parseInt(result[3], 16) > 200) ? 255 : 50),
    ")"].join("");
}

function Gums(props) {
  number = props.number;
  name = props.name;
  turn = props.turn;
  color = props.color;
  blendColor = hexToRgbPrimary(color);
  console.log(pSBC(0, color, "c"));
  console.log(blendColor);
  accentColor = pSBC(-0.7, pSBC(-0.5, props.color, blendColor));

  return (
    <View style={styles(color).root}>
      <Text style={styles(accentColor).nameText}>{number} - {name}{turn}</Text>
    </View>
  );
}

const styles = (color) => StyleSheet.create({
  root: {
    width: 375,
    height: 32,
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  nameText: {
    color: color,
    fontSize: 18,
    //fontStyle: 'bold',
    fontWeight: '700',
    letterSpacing: -0.3,
  },
});

export default Gums;
