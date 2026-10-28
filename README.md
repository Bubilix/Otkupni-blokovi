# Otkupni blokovi Mrkvica

Aplikacija za unos otkupnih blokova, izradu obrasca (B13:I42), izvoz u .xlsx/.pdf, KPR po kupcima, cijene i kupce.

- Otvara se u Microsoft Edgeu ili Google Chromeu na računalu.
- **Svi podaci spremaju se samo lokalno**, u datoteku `mrkvica-otkupni-blokovi.json` u mapi koju odaberete (npr. Dokumenti\Mrkvica podaci), uz dnevne sigurnosne kopije. Ništa se ne šalje na internet.
- Nakon prvog otvaranja radi i bez interneta; Edge je može instalirati kao aplikaciju (⋯ → Aplikacije → Instaliraj ovu stranicu kao aplikaciju).
- Ovaj repozitorij ne sadrži nikakve poslovne podatke. Cjenik i podaci kupca/prodavatelja učitavaju se jednom iz privatne datoteke `mrkvica-osnova.json` i dalje se čuvaju u lokalnoj datoteci s podacima.
