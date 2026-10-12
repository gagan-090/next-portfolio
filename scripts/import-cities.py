"""Rebuild the 6,000-place directory from official GeoNames downloads.
Usage: python3 scripts/import-cities.py /tmp/cities500.zip /tmp/admin1CodesASCII.txt
Only populated places (not neighbourhoods, historical or abandoned places) are retained.
"""
import sys,json,re,zipfile,unicodedata
from pathlib import Path
root=Path(__file__).resolve().parents[1]
regions={}
for line in Path(sys.argv[2]).read_text().splitlines():
    row=line.split('\t');regions[row[0]]=row[1]
countries={'IN':'india','ZA':'south-africa','US':'usa'}
groups={code:[] for code in countries}
with zipfile.ZipFile(sys.argv[1]) as archive:
    for line in archive.read('cities500.txt').decode().splitlines():
        row=line.split('\t')
        if row[8] not in groups or row[7] not in {'PPL','PPLA','PPLA2','PPLA3','PPLA4','PPLC'}:continue
        region=regions.get(row[8]+'.'+row[10])
        if not region or not row[17]:continue
        base=re.sub(r'[^a-z0-9]+','-',unicodedata.normalize('NFKD',row[2] or row[1]).encode('ascii','ignore').decode().lower()).strip('-')
        if not base:continue
        groups[row[8]].append({'id':row[0],'slug':base+'-'+row[0],'name':row[1],'country':countries[row[8]],'region':region,'timezone':row[17], 'population':int(row[14]),'lat':float(row[4]),'lng':float(row[5])})
for rows in groups.values():rows.sort(key=lambda c:(-c['population'],c['id']))
# Include every eligible South African record; remaining slots prioritise major places.
limits={'ZA':len(groups['ZA']),'IN':3000}
limits['US']=6000-limits['ZA']-limits['IN']
assert limits['US']>0
selected=[]
for code,limit in limits.items():
    assert len(groups[code])>=limit,(code,len(groups[code]),limit)
    selected.extend(groups[code][:limit])
assert len(selected)==6000
for row in selected:row.pop('population')
(root/'src/data/cities.json').write_text(json.dumps(selected,ensure_ascii=False,separators=(',',':'))+'\n')
print('Imported real populated places:',{countries[code]:limit for code,limit in limits.items()})
