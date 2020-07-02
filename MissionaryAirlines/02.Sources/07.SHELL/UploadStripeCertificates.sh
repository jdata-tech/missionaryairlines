cd /data/certs/stripe/tmp

openssl s_client -showcerts -connect api.stripe.com:443 </dev/null 2>/dev/null|openssl x509 -outform PEM > stripe.cer

keytool -importcert -alias stripe -keystore C:\GitHub\missionaryairlines\MissionaryAirlines\03.Configuration\1.KeyStore\missionaryairlines.jks -file C:\GitHub\missionaryairlines\MissionaryAirlines\03.Configuration\1.KeyStore\certs\stripe.cer

