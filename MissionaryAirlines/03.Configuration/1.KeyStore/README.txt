1. Import a Certificate into the JKSKEYTOOL
keytool -importcert -alias stripe -keystore C:\GitHub\missionaryairlines\MissionaryAirlines\03.Configuration\1.KeyStore\missionaryairlines.jks -file C:\GitHub\missionaryairlines\MissionaryAirlines\03.Configuration\1.KeyStore\certs\stripe.cer

2. Export a Certificate from the JKSKEYTOOL
keytool -export -alias a_certificate -file a_certificate.cer -keystore keystore.jks
