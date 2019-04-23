#import <CalendarManager.h>
#import <React/RCTLog.h>

@implementation CalendarManager

  RCT_EXPORT_MODULE();

  RCT_EXPORT_METHOD(addEvent:(NSString *) name location:(NSString *)location)
  {
      RCTLogInfo(@"PRETENDING TO CREATE AN EVENTE %@ at %@",name,location);
  }

@end