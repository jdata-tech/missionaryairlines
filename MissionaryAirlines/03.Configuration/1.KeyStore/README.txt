0. Password KeyStore : Badenkop@01

1. Import a Certificate into the JKSKEYTOOL
keytool -importcert -alias stripe_3 -keystore C:\GitHub\missionaryairlines\MissionaryAirlines\03.Configuration\1.KeyStore\missionaryairlines.jks -file C:\GitHub\missionaryairlines\MissionaryAirlines\03.Configuration\1.KeyStore\certs\stripe_3.cer

2. Export a Certificate from the JKSKEYTOOL
keytool -export -alias a_certificate -file a_certificate.cer -keystore keystore.jks

